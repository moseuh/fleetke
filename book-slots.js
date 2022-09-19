

(function(window, document, undefined){
  
  window.onload = init;
  
    function init(){
      setUpViews()
      new CalendarApp();
    }
  
  })(window, document, undefined);
  
  function setUpViews(){
    isEmpty(false)
    var btnClose = document.getElementById("btnClose");
    var btnCancel = document.getElementById("btn-cancel");
    let showModalBtn = document.getElementById("show_slots")
    showModalBtn.onclick = function(){
      var name = document.getElementById("fname").value
      var companyName = document.getElementById("companyName").value
      var email = document.getElementById("email").value
      var phone = document.getElementById("phoneNumber").value
      var jobTitle = document.getElementById("jobTitle").value
      var errorLabel = document.getElementById("errorLabel")

      if(!name || !companyName || !email || !phone || !jobTitle){
        errorLabel.innerHTML = "Please fill in all the fields marked *"
        errorLabel.style.display = "block"
        
      }else if(isValidEmail(email) == false){
        errorLabel.innerHTML = "Please provide corrent email format, email@example.com"
        errorLabel.style.display = "block"
      }else {
        closeAlerts()
        $('#bookASlotIndex').modal('show')
      }
     
    }
    btnClose.onclick = function() {
      closeAlerts()
      showCalView()
      $('#bookASlotIndex').modal('hide')
    }
    btnCancel.onclick = function() {
      closeAlerts()
      showCalView()
      $('#bookASlotIndex').modal('hide')
    }
  }
function closeAlerts(){
  $("#succesAlert").alert('close')
  $("#errorAlert").alert('close')
}
function isEmpty(status){
  const info = document.getElementById("no_slot")
  if(status == true){
    info.style.display = "block"
  }else {
    info.style.display = "none"
  }
}
function isLoading(status){
  const loader = document.getElementById("linear-loader")
  if(status == true){
    loader.style.display = "block"
  }else {
    loader.style.display = "none"
  }
}

function isValidEmail(email){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(email.match(mailformat)){
    return true
  } else {
    return false
  }
}
function creatSlotsList(params, selectedDate) {
  isLoading(true)
  const container = document.getElementById("emptySlots");
  if (container == null) {
    console.log("Container null i dont know why");
    return;
  }
  container.querySelectorAll('*').forEach(n => n.remove());
  $.ajax({
    type: 'GET',
    url: `https://business.getboda.co.ke/api/v1/appointments/availableslots/?date=${params}`,
    success: function(res){
      let listOfSlots = res.available_slots;
      console.log(listOfSlots);
    
      let dateLabel = document.createElement('LABEL');
      dateLabel.classList.add("slot-label");
      dateLabel.innerHTML = selectedDate;
      container.appendChild(dateLabel)
      console.log(params)
  
      listOfSlots.forEach(element => {
        let btn = document.createElement('button');
        btn.classList.add("btn-slot-unselected")
      
        btn.innerHTML = element;
        btn.onclick = function() {
        
          selectedTime = element;
          let time =  selectedTime.split(" - ")[0]
          let dateList = params.split("-")
          let dateTime = dateList[2]+ "-" + dateList[1] + "-" + dateList[0] + "T" + time
          console.log(dateTime);
          sendBookAppointment(dateTime, btn)
        }
        container.appendChild(btn);
      });  
      isLoading(false)
      if(listOfSlots.length === 0){
        isEmpty(true)
      }else{
        isEmpty(false)
      }

    },
    error: function(error) {
        console.log(error);
    }
})
  
}

function sendBookAppointment(dateTime, btn){

  var name = document.getElementById("fname").value
  var companyName = document.getElementById("companyName").value
  var email = document.getElementById("email").value
  var phone = document.getElementById("phoneNumber").value
  var jobTitle = document.getElementById("jobTitle").value
  var numberOfOrders = document.getElementById("numberOfOrders").value
  var interest = document.getElementById("interestedIn").value
  var moreMessage = document.getElementById("moreMessage").value

  var errorLabel = document.getElementById("errorLabel")

  if(!name || !companyName || !email || !phone || !jobTitle){
    $('#bookASlotIndex').modal('hide')
    errorLabel.innerHTML = "Please fill in all the fields marked *"
    errorLabel.style.display = "block"
    
  }else if(isValidEmail(email) == false){
    $('#bookASlotIndex').modal('hide')
    errorLabel.innerHTML = "Please provide corrent email format, email@example.com"
    errorLabel.style.display = "block"
  }else {
    isLoading(true)
    console.log(numberOfOrders)
    $.ajax({
      url: 'https://business.getboda.co.ke/api/v1/appointments/bookings/',
      dataType: 'json',
      type: 'post',
      contentType: 'application/json',
      data: JSON.stringify( { "name": name, "job_title": jobTitle, "email": email, "company": companyName,
       "phone_number": phone, "number_of_orders":  numberOfOrders, "interest": interest,
       "message": moreMessage, "appointment_date": dateTime
      } ),
      processData: false,
      success: function( data, textStatus, jQxhr ){
        isLoading(false)
        showSuccessAlert()
        document.getElementById("formSlots").reset(); 
          $('#response pre').html( JSON.stringify( data ));
          btn.style.display = "none"
      },
      error: function( jqXhr, textStatus, errorThrown ){
        isLoading(false)
        showWarningAlert()
        console.log( errorThrown );
      }
  });
  }
}

function showWarningAlert(){
  if($("#myAlert").find("div#myAlert2").length==0){
    $("#myAlert").append("<div class='alert alert-warning alert-dismissable' id='myAlert2'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button> Something went wrong. Please try again. </div>");
  }
  $("#myAlert").css("display", "");
}

function showSuccessAlert(){
  if($("#myAlertDiv").find("div#myAlert3").length==0){
    $("#myAlertDiv").append("<div class='alert alert-success alert-dismissable' id='myAlert3'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button> You have successfully booked an appointment. You will receive an email for confirmation.</div>");
  }
  $("#myAlertDiv").css("display", "");
}

//todo optimize this function

function showCalView(){
  var calDiv = document.getElementById("calendar-app");
  var slotDiv = document.getElementById("emptySlots");
  var backBtn = document.getElementById("btn-book");
  if (calDiv.style.display === "none") {
    isEmpty(false)
    calDiv.style.display = "block";
    slotDiv.style.display = "none";
    backBtn.style.display = "none"
  }
}

function showAndHideCalView() {
  isEmpty(false)
  var calDiv = document.getElementById("calendar-app");
  var slotDiv = document.getElementById("emptySlots");
  var backBtn = document.getElementById("btn-book");
  if (calDiv.style.display === "none") {
    calDiv.style.display = "block";
    slotDiv.style.display = "none";
    backBtn.style.display = "none"
  } else {
    calDiv.style.display = "none";
    slotDiv.style.display = "block"
    backBtn.style.display = "block"
  }
} 

function CalendarApp(date) {
  
  if (!(date instanceof Date)) {
    date = new Date();
  }
  
  this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 this.apts = [
    {
      name: 'Finish this web app',
      endTime: new Date(2016, 4, 30, 23),
      startTime: new Date(2016, 4, 30, 21),
      day: new Date(2016, 4, 30).toString()
    },
     {
      name: 'My Birthday!',
      endTime: new Date(2016, 4, 1, 23, 59),
      startTime: new Date(2016, 4, 1, 0),
      day: new Date(2016, 4, 1).toString()
    },
    
  ];
  
  this.aptDates = [new Date(2016, 4, 30).toString(),new Date(2016, 4, 1).toString()];
  this.eles = {
  };
  this.calDaySelected = null;
  
  this.calendar = document.getElementById("calendar-app");
  
  this.calendarView = document.getElementById("dates");
  
  this.calendarMonthDiv = document.getElementById("calendar-month");
  this.calendarMonthLastDiv = document.getElementById("calendar-month-last");
  this.calendarMonthNextDiv = document.getElementById("calendar-month-next");
  
  this.dayInspirationalQuote = document.getElementById("inspirational-quote");
   
  this.todayIsSpan = document.getElementById("footer-date");
  // this.eventsCountSpan = document.getElementById("footer-events");
  this.dayViewEle = document.getElementById("day-view");
  this.dayViewExitEle = document.getElementById("day-view-exit");
  this.dayViewDateEle = document.getElementById("day-view-date");
  this.addDayEventEle = document.getElementById("add-event");
  this.dayEventsEle = document.getElementById("day-events");
  
  this.dayEventAddForm = {
    cancelBtn: document.getElementById("add-event-cancel"),
    addBtn: document.getElementById("add-event-save"),
    nameEvent:  document.getElementById("input-add-event-name"),
    startTime:  document.getElementById("input-add-event-start-time"),
    endTime:  document.getElementById("input-add-event-end-time"),
    startAMPM:  document.getElementById("input-add-event-start-ampm"),
    endAMPM:  document.getElementById("input-add-event-end-ampm")
  };
  this.dayEventsList = document.getElementById("day-events-list");
  this.dayEventBoxEle = document.getElementById("add-day-event-box");
  
  /* Start the app */
  this.showView(date);
  this.addEventListeners();
  var showToday = "Today is " + this.months[date.getMonth()] + " " + date.getDate();  
}
CalendarApp.prototype.addEventListeners = function(){
  
  this.calendarMonthLastDiv.addEventListener("click", this.showNewMonth.bind(this));
  this.calendarMonthNextDiv.addEventListener("click", this.showNewMonth.bind(this));

};

CalendarApp.prototype.showView = function(date){
  if ( !date || (!(date instanceof Date)) ) date = new Date();
  var now = new Date(date),
      y = now.getFullYear(),
      m = now.getMonth();
  var today = new Date();
  
  var lastDayOfM = new Date(y, m + 1, 0).getDate();
  var startingD = new Date(y, m, 1).getDay();
  var lastM = new Date(y, now.getMonth()-1, 1);
  var nextM = new Date(y, now.getMonth()+1, 1);
 
  this.calendarMonthDiv.classList.remove("cview__month-activate");
  this.calendarMonthDiv.classList.add("cview__month-reset");
  
  while(this.calendarView.firstChild) {
    this.calendarView.removeChild(this.calendarView.firstChild);
  }
  
  // build up spacers
  for ( var x = 0; x < startingD; x++ ) {
    var spacer = document.createElement("div");
    spacer.className = "cview--spacer";
    this.calendarView.appendChild(spacer);
  }
  
  for ( var z = 1; z <= lastDayOfM; z++ ) {
   
    var _date = new Date(y, m ,z);
    var day = document.createElement("div");
    day.className = "cview--date";
    day.textContent = z;
    day.setAttribute("data-date", _date);
    day.onclick = this.showDay.bind(this);
    
// check if it is a past date
if ( z < today.getDate() && y < today.getFullYear() && m < today.getMonth() ) {
  day.classList.add("past-date");
}

    // check if todays date
    if ( z == today.getDate() && y == today.getFullYear() && m == today.getMonth() ) {
      day.classList.add("today");
    }
    
     // check if has events to show
    if ( this.aptDates.indexOf(_date.toString()) !== -1 ) {
      day.classList.add("has-events");
    }
    
    this.calendarView.appendChild(day);
  }
  
  var _that = this;
  setTimeout(function(){
    _that.calendarMonthDiv.classList.add("cview__month-activate");
  }, 50);
  
  this.calendarMonthDiv.textContent = this.months[now.getMonth()] + " " + now.getFullYear();
  this.calendarMonthDiv.setAttribute("data-date", now);

  
  this.calendarMonthLastDiv.textContent = "← " + this.months[lastM.getMonth()];
  this.calendarMonthLastDiv.setAttribute("data-date", lastM);
  
  this.calendarMonthNextDiv.textContent = this.months[nextM.getMonth()] + " →";
  this.calendarMonthNextDiv.setAttribute("data-date", nextM);
  
}
CalendarApp.prototype.showDay = function(e, dayEle) {
  e.stopPropagation();
  if ( !dayEle ) {
    dayEle = e.currentTarget;
  }
  var dayDate = new Date(dayEle.getAttribute('data-date'));
  
  this.calDaySelected = dayEle;
  
  //Change this function to show date selected in the side col 
  this.openDayWindow(dayDate);
  

  
};
CalendarApp.prototype.openDayWindow = function(date){
  var day = new Date(date);
  
  let mDate = this.days[day.getDay()] + ", " + this.months[day.getMonth()] + " " + day.getDate() + ", " + day.getFullYear();
  
  var curr_date = day.getDate();

  var curr_month = day.getMonth() + 1;
  
  var curr_year = day.getFullYear();
  let dateParam = curr_date + "-" + curr_month + "-" + curr_year;
  this.dayViewDateEle.textContent = mDate;
  console.log(mDate)
  console.log(dateParam);

  creatSlotsList(dateParam,mDate);

  showAndHideCalView()
  
};



CalendarApp.prototype.convertTo23HourTime = function(stringOfTime, AMPM) {
  // convert to 0 - 23 hour time
  var mins = stringOfTime.split(":");
  var hours = stringOfTime.trim();
  if ( mins[1] && mins[1].trim() ) {
    hours = parseInt(mins[0].trim());
    mins = parseInt(mins[1].trim());
  } else {
    hours = parseInt(hours);
    mins = 0;
  }
  hours = ( AMPM == 'am' ) ? ( (hours == 12) ? 0 : hours ) : (hours <= 11) ? parseInt(hours) + 12 : hours;
  return [hours, mins];
};
CalendarApp.prototype.cleanEventTimeStampDates = function() {
  
  var startTime = this.dayEventAddForm.startTime.value.trim() || this.dayEventAddForm.startTime.getAttribute("placeholder") || '8';
  var startAMPM = this.dayEventAddForm.startAMPM.value.trim() || this.dayEventAddForm.startAMPM.getAttribute("placeholder") || 'am';
  startAMPM = (startAMPM == 'a') ? startAMPM + 'm' : startAMPM;
  var endTime = this.dayEventAddForm.endTime.value.trim() || this.dayEventAddForm.endTime.getAttribute("placeholder") || '9';
  var endAMPM = this.dayEventAddForm.endAMPM.value.trim() || this.dayEventAddForm.endAMPM.getAttribute("placeholder") || 'pm';
  endAMPM = (endAMPM == 'p') ? endAMPM + 'm' : endAMPM;
  var date = this.dayEventBoxEle.getAttribute("data-date");
  
  var startingTimeStamps = this.convertTo23HourTime(startTime, startAMPM);
  var endingTimeStamps = this.convertTo23HourTime(endTime, endAMPM);
  
  var dateOfEvent = new Date(date);
  var startDate = new Date(dateOfEvent.getFullYear(), dateOfEvent.getMonth(), dateOfEvent.getDate(), startingTimeStamps[0], startingTimeStamps[1]);
  var endDate = new Date(dateOfEvent.getFullYear(), dateOfEvent.getMonth(), dateOfEvent.getDate(), endingTimeStamps[0], endingTimeStamps[1]);
  
  // if end date is less than start date - set end date back another day
  if ( startDate > endDate ) endDate.setDate(endDate.getDate() + 1);
  
  return [startDate, endDate];
  
};

CalendarApp.prototype.showNewMonth = function(e){
  var date = e.currentTarget.dataset.date;
  var newMonthDate = new Date(date);
  this.showView(newMonthDate);
  return true;
};



