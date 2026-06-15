function logActivity(activity, employee){

let activities = JSON.parse(localStorage.getItem("activities")) || [];

const newActivity = {

id: activities.length + 1,
action: activity,
name: employee,
date: new Date().toLocaleString()

};

activities.unshift(newActivity);

localStorage.setItem("activities", JSON.stringify(activities));

}