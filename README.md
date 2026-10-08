NASA Astronomy Picture of the Day

Web app that lets users pick a date to view NASA's Astronomy Picture of the Day (APOD). It displays the image or video, title, and explanation for the chosen date.



Features

- **Date Picker:** Select any date to retrieve media from NASA's archive.
- **Image & Video Support:** Automatically detects whether the media is an image or a video and updates the page layout.
- **Detailed Descriptions:** Displays the official NASA title and detailed explanation for each entry.



 API Used

- **NASA Astronomy Picture of the Day (APOD) API:** `https://api.nasa.gov/planetary/apod`



 How It Works

1. The user inputs a date and clicks the button.
2. The app fetches data from the APOD API using the selected date.
3. If the media type is `image`, it shows an image element; if it is `video`, it shows an iframe/video element.
4. The title, explanation, and media source update on the page dynamically.


<img width="2868" height="1568" alt="image" src="https://github.com/user-attachments/assets/2a51b2d6-3a77-40ef-8de4-8ca41e8622e9" />

 

