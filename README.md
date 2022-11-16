# NebulaX
Course search application with intgrated professor's ratings  <br>
This project was developed as a part of challenge during HackUTD 2022. You can find the submission on Devpost [here](https://devpost.com/software/nebulax?ref_content=my-projects-tab&ref_feature=my_projects).


## Tech Stack
Next.js, Nebula APIs, @mtucourses/rate-my-professors npm package

## Inspiration
Signing up for courses every semester is not an easy task if you have to look for every professor taking every course and you have to go to Rate My Professor every time.<br> So, here is the NebulaX to make your life easy!

## What it does
You can have a look at ratings of all the professors for a specific course in the past and compare them all on a single page. <br>
Not just this, you can find all the related courses by using any of the following search criteria:
- Course Number (1325)
- Subject Prefix (MATH)
- Course Title (Calculus I)
- Credit Hours (3)
- Class Level (Graduate)
- Activity type (Lecture)
- Offering Frequency (S)
So, just type anything that you would like to search for taking up the courses, and get all the ratings together in a click. 

## How is it happening
The course search based on the entered criteria is performed utilizing the public APIs provided by Nebula. Also, the RMP data is accessed by using the node packages and combining this all, we provide you the summarised data for every course on a single page! 
Currently, this can be used only for the courses that are being taught at UTD.

## Screenshots
<figure>
<img src="https://user-images.githubusercontent.com/43651488/202057803-897b6040-96f9-44de-ab38-17086432a406.jpeg" width="600" alt="Search bar"/>
<figure-caption>Figure 1. Search bar on NebulaX </figure-caption>
</figure>

<figure>
<img src="https://user-images.githubusercontent.com/43651488/202057966-68cd708c-7a61-4017-bbf1-d7caea3c73fb.jpeg" width="600" alt="Course List"/>
<figure-caption>Figure 2. Course List matching search criteria </figure-caption>
</figure>

<figure>
<img src="https://user-images.githubusercontent.com/43651488/202058097-6680c5e0-8ab5-4586-b20b-5b47c2a75170.jpeg" width="600" alt="Sigle Course"/>
<figure-caption>Figure 3. Information for a single course </figure-caption>
</figure>


