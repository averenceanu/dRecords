# dRecords

**Project Description**
An online charting application allowing healthcare providers to access patient information and schedule follow-up appointments efficiently. The user can keep track of old entries and register new ones upon a change in the patient's condition. An integrated calendar allows the user to plan tasks and keep track of upcoming events.

**Problem solved** 
Currently, there are few universal tools that allow for charting, diagnosis, medical history, and appointment all on one platform, which leads to greater effort on practitioner and time consumption. 

As a previous healthcare provider, I believe that to solve the inefficiencies there should be a uniform portal allowing for all of these procedures to happen in one place. 

This projects’ value proposition is to allow the practitioner to perform all these functions resulting in a greater time savings and convenience, freeing up their time to allow for actual healthcare rather than administrative duties. 


**Target audience:** Healthcare providers looking for an effective way of documenting their diagnosis and notes as well as keeping track of patients.

## User Diagram with Mermaid

``` mermaid
journey
	title dRecords is a practitioner web-application to manage patients their medical records and appointments
	section Practitioner using drecords web-app
		logs-in & views my patients list: 1: Practitioner
		choose particular patient from list: 3: Practitioner
		chart, read med info & set diagnosis: 5: Practitioner, Patient
		book appointment, email notification: 5: Practitioner, Patient
	section Patient check their email
		receives email: 5: Patient
		appointment details or cancels by call: 2: Practitioner, Patient
	section Patients visits appointment
		is able to chart & update notes on patient: 2: Practitioner
		updates database, account logs out: 5: Patient
```
##Dependencies 
1. Frontend: React, Material-UI, Bootstrap, Kalend (https://docs.kalend.org/docs/intro), SASS
2. Backend: Node.js , Express, Send-grid Mail API
3. Database: Postgres


##Set Up 
1. Install Front-End dependencies with ```npm install``` in the client folder 
2. Install Back-End dependencies with ```npm install``` in the server folder
3. Set Up psql by creating a new database and coming the .env.example file in the .env file 
4. In order to be able to send an email after an appointment is created, create a API KEY with SendGrid (https://sendgrid.com/) and add it to .env file

##Pictures 
![Index Page](https://github.com/averenceanu/dRecords/blob/main/client/projectPictures/Screen%20Shot%202022-02-21%20at%206.08.33%20PM.png)
![Work Bord](https://github.com/averenceanu/dRecords/blob/main/client/projectPictures/Screen%20Shot%202022-02-21%20at%206.10.54%20PM.png)
![calendar](https://github.com/averenceanu/dRecords/blob/main/client/projectPictures/Screen%20Shot%202022-02-21%20at%206.11.33%20PM.png)
![add Appointment](https://github.com/averenceanu/dRecords/blob/main/client/projectPictures/Screen%20Shot%202022-02-21%20at%206.11.45%20PM.png)
![patientdetails](https://github.com/averenceanu/dRecords/blob/main/client/projectPictures/Screen%20Shot%202022-02-21%20at%206.12.18%20PM.png)
