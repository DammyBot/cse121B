"use strict"

const option = {month: 'numeric', day: 'numeric', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', option);

const todaydate = new Date();
const year = todaydate.getFullYear();
document.getElementById('year').textContent = year