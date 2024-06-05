require('dotenv').config();

class ZohoModulePusher {
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.zohoApiUrl = 'https://www.zohoapis.com/crm/v2/Group_Lessons';
    }

    pushRecord(data) {
        fetch(this.zohoApiUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Zoho-oauthtoken ' + this.accessToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Response from Zoho:', data);
        })
        .catch(error => {
            console.error('Error pushing record to Zoho:', error);
        });
    }
}

let accessToken = process.env.ZOHO_ACCESS_TOKEN //|| "None";

let zohoPusher = new ZohoModulePusher(accessToken);

let groupedLessonData = {
    data: [
        {
            "Name": "Testing",
            "topsetGroupID": "090876567343",
            "Students_Group": [
                {
                    "Student": "5841109000008707011"
                },
                {
                    "Student": "5841109000008707011"
                }
            ]
        }
    ]
};

zohoPusher.pushRecord(groupedLessonData);
