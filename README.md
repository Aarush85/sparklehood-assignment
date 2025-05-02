# 🚨 AI Safety Incident Logger API

This API was my solution for the Sparklehood assignment. I built it to demonstrate how we can track and manage AI safety incidents - something I became interested in after reading about recent controversies in AI ethics.

## Tech Stack 💻

- **TypeScript** 
- **Node.js + Express** 
- **MongoDB with Mongoose** 

## Challenges I Faced

Setting up MongoDB gave me a hard time initially - had to troubleshoot connection issues for almost 2 hours! Also, TypeScript interfaces were tricky to get right for the incident model, but they saved me from countless bugs later.

## Getting Started 🚀

### Prerequisites

- Node.js (v14+)
- MongoDB (v4.4+)

### Setup

1. Clone this repo:
   ```bash
   git clone https://github.com/Aarush85/sparklehood-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root folder:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/incidents_db
   ```

4. Load some sample data (so you don't start with an empty DB):
   ```bash
   npm run seed
   ```

### Running the App

Build and start the application:
```bash
npm run build
npm start
```

Your API will be running at [http://localhost:3000](http://localhost:3000) - change the port if it is already being used.

## Testing with Postman 

### 1. Fetching All Incidents (GET)

1. Open Postman (Install it if you haven't)
2. Create a new request with:
   - Method: `GET`
   - URL: `http://localhost:3000/incidents`
3. Click Send and you'll get all your incidents in JSON format

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
- Went with **MongoDB** because it's perfect for document-style data (easier to set up than PostgreSQL). Plus, I wanted more practice with NoSQL after our DBMS project last semester.
- Created an enum for severity values to avoid weird inputs
- All incidents get automatic timestamps 
- Added input validation because one can never trust user input!

Note: The error handling could be more robust, but it works for the scope of this assignment. I focused more on getting the core functionality right than on covering every edge case.

## Future Improvements

If I had more time, I'd love to add:
- User authentication (JWT would be perfect for this)
- A simple React frontend to visualize incidents
- Pagination for the GET endpoint (right now it returns all incidents at once)
- Ability to add images to incident reports


---
