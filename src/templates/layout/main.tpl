<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>{{ title | title }}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- build:css styles/vendor.min.css -->
	<link rel="stylesheet" href="libs/bootstrap/bootstrap.min.css">
	<link rel="stylesheet" href="libs/swiper/swiper-bundle.min.css">
	<link rel="stylesheet" href="libs/slick/slick.min.css">
	<link rel="stylesheet" href="libs/slick/slick-theme.css">
	<link rel="stylesheet" href="libs/slick/slick-lightbox.css">
	<!-- endbuild -->

	<!-- build:css styles/main.css -->
	<link rel="stylesheet" href="styles/main.css">
	<!-- endbuild -->
	<link rel="shortcut icon" type="image/x-icon" href="images/png/logo.png" />
</head>
<body>
	<div class="site-wrapper">
        {% block content %} {% endblock %}
	</div>

	<!-- build:js scripts/jquery.min.js -->

	<script src="libs/jquery.min.js"></script>
	<!-- endbuild -->



	<!-- build:js scripts/bootstrap.min.js -->
	
	<script src="libs/jquery.min.js"></script>
	<!-- endbuild -->



	<!-- build:js scripts/vendor.min.js -->

	<script src="./libs/bootstrap/bootstrap.bundle.min.js"></script>
	<script src="libs/swiper/swiper-bundle.min.js"></script>
	<script src="libs/slick/slick.min.js"></script>
	<script src="libs/slick/slick-lightbox.min.js"></script>
	<!-- endbuild -->

	<!-- build:js scripts/main.js -->
	<script src="scripts/main.js"></script>
	<!-- endbuild -->
</body>
</html>