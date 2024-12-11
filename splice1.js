var developers=[
    'Anushka Sharma',
    'Virat Kohali',
    'Akaay Kohali',
    'Vamika Kohali',
    'Shraddha Kapoor',
    'Vikram Waykar',
    'Pratik Wable',
    'Tiger Shrof',
    'Dikshika Shinde',
    'Om Tanpure'
]

var underPerforming=developers.splice(3,1,'Akriti Negi');
console.log(underPerforming);
console.log(developers);

var transferDeveloper=developers.splice(6,1);
console.log(transferDeveloper);
console.log(developers);