// user creation, but I did not use this ??!!
function User(id, name) {
	this.userId = id;
	this.userName = name;
}
var user1 = new User('LIL01', 'Lilla');

// define an array where I can place my objects "Issue" into
var issues = [];

// constructor for the object "Issue" to be placed int the "issues" array
function Issue(id, type, name, sprint, createdBy, assignee, description, progress, tasks, comments, updatedAt, createdAt) {
	this.issueId = id;
	this.issueType = type;
	this.issueName = name;
	this.issueSprint = sprint;
	this.createdBy = createdBy;
	this.assignedTo = assignee;
    this.description = description;
	this.progress = progress;
	this.tasks = tasks;
	this.comments = comments;
	this.updatedAt = updatedAt;
	this.createdAt = createdAt;
}
// function to output the content of the array "issues", if there is any - as part of the function Add
function Show(){
var output = '';
if (issues.length > 0) {
		  	output += '<tr>';
			output += '<th>ID</th>';
			output += '<th>Type</th>';
			output += '<th>Project Name</th>';
			output += '<th>Sprints</th>';
			output += '<th>Creted By</th>';
			output += '<th>Responsible</th>';
			output += '<th>Description</th>';
			output += '<th>Status</th>';
			output += '<th>Tasks</th>';
			output += '<th>Comments</th>';
			output += '<th>Updates At</th>';
			output += '<th>Created At</th>';
			output += '</tr>';
      for (i = 0; i < issues.length; i++) {
			output += '<tr>';
			output += '<td>' + issues[i].issueId + '</td>';
			output += '<td>' + issues[i].issueType + '</td>';
			output += '<td>' + issues[i].issueName + '</td>';
			output += '<td>' + issues[i].issueSprint + '</td>';
			output += '<td>' + issues[i].createdBy + '</td>';
			output += '<td>' + issues[i].assignedTo + '</td>';
			output += '<td>' + issues[i].description + '</td>';
			output += '<td>' + issues[i].progress + '</td>';
			output += '<td>' + issues[i].tasks + '</td>';
			output += '<td>' + issues[i].comments + '</td>';
			output += '<td>' + issues[i].updatedAt + '</td>';
			output += '<td>' + issues[i].createdAt + '</td>';
			output += '<td>' + '<button onclick="Edit(' + i + ')">Edit</button></td>';
			output += '<td>' + '<button onclick="Complete(' + i + ')">Mark Completed</button></td>';
			output += '</tr>';
			document.getElementById('issues').innerHTML = output;
		} 
	}
else {document.getElementById('issues').innerHTML = 'There is no data in the form, please create your project'; }
}

//function to edit  the selected project
//besides changing the progress indicator this should also open up a form to allow comment insert - TO BE DONE
function Edit(i){
	if (issues[i].progress == 'Ready for Testing') {
		alert("This job should be tested, please don't change it!");
	}
	else {
//the form should open up here
// instead of the status "Updated!" an adequate status should be chosen form a "select" form (in progress, feedback, ...)
		issues[i].progress = "Updated!";
		issues[i].updatedAt = new Date().getHours() +':'+ new Date().getMinutes()+':'+ new Date().getSeconds();;
	}
	Show();
}

//function to mark completed a project *delete from array*
function Complete(i){
	issues[i].progress = 'Ready for Testing!';
	issues[i].updatedAt = new Date().getHours() +':'+ new Date().getMinutes()+':'+ new Date().getSeconds();;
	Show();
}
	
// adding the content of the form to the "issues" array as an object and output to the page by using Show function
// create a unique id - TO BE DONE
// sprint?
// description, an input form text area to add comments in the HTML - TO BE DONE
// progress - new by default when item is added
// tasks - ??? - TO BE DONE
// comments same solution as for description
 
function Add(){
	if(document.getElementById('add-name').value != 0) {
	id = new Date().getTime();
	type = document.getElementById('type').value;
	name = document.getElementById('add-name').value;
    sprint = 'sprint';
	createdBy = user1.userName;
	assignee = document.getElementById('assignedTo').value;
	description = 'description';
	progress = 'New';
	tasks = 'tasks';
	comments = 'comments';
	updatedAt = new Date().getHours() +':'+ new Date().getMinutes()+':'+ new Date().getSeconds();
	createdAt = new Date().getHours() +':'+ new Date().getMinutes()+':'+ new Date().getSeconds();
	var issue = new Issue(id, type, name, sprint, createdBy, assignee, description, progress, tasks, comments, updatedAt, createdAt);
	issues.push(issue);
	}
	Show();
}
