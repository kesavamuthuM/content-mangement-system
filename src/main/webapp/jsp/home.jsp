<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page
	import="com.google.appengine.api.blobstore.BlobstoreServiceFactory"%>
<%@ page import="com.google.appengine.api.blobstore.BlobstoreService"%>

<%
	BlobstoreService blobstoreService = BlobstoreServiceFactory.getBlobstoreService();
%>

<!DOCTYPE html>
<html>
<head>
<title>homepage</title>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
	integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
	crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
	integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
	crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
	integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
	crossorigin="anonymous"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" type="text/css" href="../css/homestyle.css">

</head>
<body>

	<!-- navigation details -->
	<div class="container-fluid bg-warning">

		<h1 class=" text-center ">Contact Management System</h1>

	</div>
	<div class="header clearfix navbar-inverse">
		<nav>
			<ul class="nav nav-pills pull-right ">

				<li role="presentation" id="logout"><a href="/html/login.html">Logout</a></li>
			</ul>
		</nav>
		<h3 class="text-muted">Welcome</h3>
	</div>

	<!-- form begins here -->

	<div class="container-fluid"
		style="max-height: 100px; margin-top: 6px;">
		<div class="row">
			<div class="col-md-4">
				<div class="jumbotron block text-center subJumbo">
					<h2>All Contact Details</h2>
					<br>
					<div class="well" id="contactCollections"
						style="padding: 13%; max-height: 300px; overflow: auto;">
						<div id="contactsId" style="">

							<!-- <a href="#" class="btn btn-default btn-block linkBtn">contact
								1 </a> <a href="#" class="btn btn-default btn-block linkBtn">contact
								2 </a> <a href="#" class="btn btn-default btn-block linkBtn">contact
								3 </a> -->

						</div>
					</div>

					<!--	<label class="h4">contact 1</label>
				<label>contact 1</label>
				<label>contact 1</label>
				<label>contact 1</label>
				<label>contact 1</label>-->
				</div>
			</div>




			<!-- second section -->
			<div class="col-md-4">
				<div class="jumbotron">
					<br>
					<div class="text-center">
						<img src="../images/rose.jfif" alt="..."
							class="img-rounded float-right" style="width: 40%">
					</div>


					<h2 class="text-center" id="userheading">User Details</h2>

					<dl class="row well">



						<table style="width: 100%">
							<tr>
								<th>Username:</th>
								<td><input type="text" style="width: 100%"
									id="edit-username"></td>
							</tr>
							<tr>
								<th>Email:</th>
								<td><input type="text" style="width: 100%" id="edit-email"></td>
							</tr>
							<tr>
								<th>Gender:</th>
								<td><input type="text" style="width: 100%" id="edit-gender"></td>
							</tr>

							<tr>
								<th>Organisation:</th>
								<td><input type="text" style="width: 100%"
									id="edit-organisation"></td>
							</tr>
							<tr>
								<th>contact-no:</th>
								<td><input type="text" style="width: 100%"
									id="edit-contact"></td>
							</tr>

						</table>
						<input type="button" value="Edit" class="btn btn-default">
				</div>

			</div>



			<!--                                          third section                       -->

			<div class="col-md-4">
				<div class="jumbotron"
					style="border: 2px solid black; max-height: 600px; height: 550px;">

					<form id="firstForm" method="post" id="thirdsectionform">
						<div class="form-group" style="position: relative;">
							<label for="exampleInputEmail1">Username</label> <input
								type="text" name="username" id="username" class="form-control"
								placeholder="username">
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1">Email address</label> <input
								type="email" class="form-control" id="exampleInputEmail1"
								placeholder="Email">
						</div>
						<div class="form-group">
							<label for="organisation">Organisation</label> <input type="text"
								name="organisation" class="form-control" id="organisation"
								placeholder="organisation">
						</div>
						<div class="formt-group">
							<label for="contact-no">Contact no.</label> <input type="number"
								name="contact" id="contact" class="form-control"
								placeholder="contact-no">
						</div>

						<div class="formt-group"
							style="display: inline-block; margin-top: 20px">

							<label for="Gender"> Gender: </label>
						</div>
						<div class="radio" id="Gender" style="display: inline;">

							<label> <input type="radio" name="gender" value="male"
								style="text-align: right;"> Male
							</label> <label> <input type="radio" name="gender" value="female">Female
							</label>
						</div>
					</form>
					<div class="form-group">
						<form id="image-submitter"
							onchange="<%=blobstoreService.createUploadUrl("/upload")%>"
							method="post" enctype="multipart/form-data">
							<label for="exampleInputFile">Image</label> <input type="file"
								id="exampleInputFile">
							<h5 class="help-block">only png and jpg allowed</h5>
						</form>
					</div>


					<button type="button" value="submit" class="btn btn-default"
						id="submit">Submit</button>

				</div>
			</div>

		</div>
	</div>


	<script
		src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script type="text/javascript" src="../js/deleteButton.js"></script>
	<script type="text/javascript" src="../js/InitialDataCollector.js">
		
	</script>
</body>
</html>