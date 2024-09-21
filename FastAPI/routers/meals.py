from fastapi import APIRouter, HTTPException
from typing import List
from utils.csv_processor import get_all_meals, get_meal_details

router = APIRouter(
    prefix="/meals",
    tags=["meals"]
)

@router.get("/", response_model=List[dict])
def read_all_meals():
    try:
        meals = get_all_meals()
        return meals
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{meal_id}", response_model=dict)
def read_meal_details(meal_id: int):
    try:
        meal_details = get_meal_details(meal_id)
        if not meal_details:
            raise HTTPException(status_code=404, detail="Meal not found")
        return meal_details
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))