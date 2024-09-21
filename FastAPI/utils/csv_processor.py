import pandas as pd
from typing import List, Dict

# Define the path to the CSV file
CSV_FILE_PATH = "data/meals.csv" 

def get_all_meals() -> List[Dict]:
    """Read the CSV file and return a list of all meals using pandas."""
    try:import os
import pandas as pd
from typing import List, Dict

# Adjust the path to the CSV file to be relative to the current file location
CSV_FILE_PATH = os.path.join(os.path.dirname(__file__), "../../data/meals.csv")

def get_all_meals() -> List[Dict]:
    """Read the CSV file and return a list of all meals using pandas."""
    try:
        # Read the CSV file into a DataFrame
        df = pd.read_csv(CSV_FILE_PATH)
        
        # Convert the DataFrame to a list of dictionaries
        meals = df.to_dict(orient='records')
        
        return meals
    except FileNotFoundError:
        print(f"Error: File not found at path {CSV_FILE_PATH}")
    except Exception as e:
        print(f"Error reading CSV file: {str(e)}")
    return []

def get_meal_details(meal_id: int) -> Dict:
    """Get details of a specific meal by ID using pandas."""
    try:
        # Read the CSV file into a DataFrame
        df = pd.read_csv(CSV_FILE_PATH)
        
        # Filter the DataFrame to find the meal with the given ID
        meal = df[df['id'] == meal_id].to_dict(orient='records')
        
        # Return the first match if available, else return an empty dictionary
        return meal[0] if meal else {}
    except FileNotFoundError:
        print(f"Error: File not found at path {CSV_FILE_PATH}")
    except Exception as e:
        print(f"Error reading CSV file: {str(e)}")
    return {}
        # Read the CSV file into a DataFrame
        df = pd.read_csv(CSV_FILE_PATH)
        
        # Convert the DataFrame to a list of dictionaries
        meals = df.to_dict(orient='records')
        
        return meals
    except FileNotFoundError:
        print(f"Error: File not found at path {CSV_FILE_PATH}")
    except Exception as e:
        print(f"Error reading CSV file: {str(e)}")
    return []

def get_meal_details(meal_id: int) -> Dict:
    """Get details of a specific meal by ID using pandas."""
    try:
        # Read the CSV file into a DataFrame
        df = pd.read_csv(CSV_FILE_PATH)
        
        # Filter the DataFrame to find the meal with the given ID
        meal = df[df['id'] == meal_id].to_dict(orient='records')
        
        # Return the first match if available, else return an empty dictionary
        return meal[0] if meal else {}
    except FileNotFoundError:
        print(f"Error: File not found at path {CSV_FILE_PATH}")
    except Exception as e:
        print(f"Error reading CSV file: {str(e)}")
    return {}