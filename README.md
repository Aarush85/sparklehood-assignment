# 🚨 AI Safety Incident Logger API

Hey fellow coders! This is my mini-project for the Web Services course - a simple REST API to track potential AI safety incidents. Perfect for your resume or that internship application you're working on!

## Tech Stack 💻

- **TypeScript** 
- **Node.js + Express** 
- **MongoDB with Mongoose** 

## Getting Started 🚀

### Prerequisites

- Node.js (v14+)
- MongoDB (v4.4+)

### Setup

1. Clone this repo:

   git clone https://github.com/your-username/ai-safety-logger.git

2. Install dependencies:   npm install

3. Create a `.env` file in the root folder:

   PORT=3000
   MONGO_URI=mongodb://localhost:27017/incidents_db`

4. Load some sample data (so you don't start with an empty DB):

   npm run seed
   

### Running the App


Build using one of these commands:

npm run build
npm start

Your API will be running at [http://localhost:3000](http://localhost:3000) - change the port if it is already being used

## Testing with Postman 🧪

### 1. Fetching All Incidents (GET)

1. Fire up Postman (if you haven't installed it yet, what are you waiting for?)
2. Create a new request with:
   - Method: `GET`
   - URL: `http://localhost:3000/incidents`
3. Hit Send and you'll get all your incidents in JSON format

### 2. Creating a New Incident (POST)

1. New request in Postman
2. Set method to `POST`
3. URL: `http://localhost:3000/incidents`
4. Go to Body tab → select raw → JSON
5. Paste this JSON (or make your own):
   ```json
   {
     "title": "Algorithm Bias Detected",
     "description": "AI system showed bias in hiring recommendations",
     "severity": "Medium"
   }
   ```
6. Hit Send and see your new incident with its ID and timestamp

## API Endpoints Overview 💻

Here are all the endpoints this API supports:

### Get All Incidents
- **Method**: GET
- **URL**: `/incidents`

### Create a New Incident
- **Method**: POST 
- **URL**: `/incidents`
- **Body**: JSON with title, description, and severity

### Get a Specific Incident
- **Method**: GET
- **URL**: `/incidents/:id`

### Delete an Incident
- **Method**: DELETE
- **URL**: `/incidents/:id`

## Error Handling

The API returns standard HTTP codes (nothing fancy, just the usual):
- `200` - Success!
- `201` - Created successfully
- `204` - Deleted successfully
- `400` - You messed up the request
- `404` - Can't find what you're looking for
- `500` - I messed up somewhere in the code 😅

## Design Decisions & Learning Points

- Used **TypeScript** because it saved me from countless runtime errors during development
- Went with **MongoDB** because it's perfect for document-style data (and let's be honest, easier to set up than PostgreSQL)
- **Mongoose ODM** handles all the schema validation so I don't have to
- Created an enum for severity values to avoid weird inputs
- All incidents get automatic timestamps (one less thing to worry about)
- Added input validation because you can never trust user input!

---
