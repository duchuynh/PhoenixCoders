from fastapi import FastAPI
from routers import meals

app = FastAPI()

# Include the meals router
app.include_router(meals.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Potluck App"}