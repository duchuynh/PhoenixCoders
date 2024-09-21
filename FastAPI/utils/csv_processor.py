import csv
from typing import List, Dict

# Define the path to the CSV file
CSV_FILE_PATH = "data/meals.csv"  # Adjust this path if your CSV file is located elsewhere

def get_all_meals() -> List[Dict]:
    """Read the CSV file and return a list of all meals."""
    meals = []
    try:
        with open(CSV_FILE_PATH, mode='r', newline='', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                meals.append({
                    "id": int(row["id"]),
                    "name": row["name"],
                    "cuisine": row["cuisine"],
                    "servings": int(row["servings"])
                })
    except FileNotFoundError:
        print(f"Error: File not found at path {CSV_FILE_PATH}")
    except Exception as e:
        print(f"Error reading CSV file: {str(e)}")
    return meals

def get_meal_details(meal_id: int) -> Dict:
    """Get details of a specific meal by ID."""
    try:
        with open(CSV_FILE_PATH, mode='r', newline='', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                if int(row["id"]) == meal_id:
                    return {
                        "id": int(row["id"]),
                        "name": row["name"],
                        "cuisine": row["cuisine"],
                        "servings": int(row["servings"]),
                        "ingredients": row["ingredients"].split(','),
                        "instructions": row["instructions"].split('.')
                    }
    except FileNotFoundError:
        print(f"Error: File not found at path {CSV_FILE_PATH}")
    except Exception as e:
        print(f"Error reading CSV file: {str(e)}")
    return {}

# Example CSV File (`data/meals.csv`):
id,name,cuisine,servings,ingredients,instructions
1,Spaghetti Carbonara,Italian,4,"Spaghetti, Eggs, Pancetta, Parmesan, Pepper","Boil water and cook spaghetti. Fry pancetta. Mix eggs and cheese. Combine all."
2,Chicken Curry,Indian,4,"Chicken, Curry powder, Onions, Tomatoes, Coconut milk","Cook chicken. Sauté onions and spices. Add tomatoes and coconut milk. Simmer."