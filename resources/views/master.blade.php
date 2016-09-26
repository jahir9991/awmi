<!doctype html>
<html lang="en" ng-app="myApp">
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel App</title>
    <link rel="stylesheet" href="{{asset('bower_components/bootstrap/paper/paper.css')}}">
    {{--<link rel="stylesheet" href="https://bootswatch.com/paper/bootstrap.min.css">--}}
    {{--<link rel="stylesheet" href="https://bootswatch.com/lumen/bootstrap.min.css">--}}
    <link rel="stylesheet" href="{{asset('bower_components/animate.css/animate.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    {{--<link href="https://cdnjs.cloudflare.com/ajax/libs/angularjs-toaster/1.1.0/toaster.min.css" rel="stylesheet"/>--}}
    <script> var baseUrl = "{{url('/')}}/"  ;
        var csrftoken = "{{ csrf_token() }}" ; </script>
</head>
<body>

<div class="container-fluid" ng-controller="globalController">
    <div ng-view></div>
</div>
<footer class="footer main-color index-footer container-fluid">
    <div class="paragraph col-md-4">
        <strong>Phone:</strong>+1 (609) 672-8955&nbsp;<br>
        +1 (416) 500-0552<br>
        <strong>Email: </strong>awmigroup@gmail.com<br>
    </div>
    <div class="col-md-4 text-center">
        <img src="/img/footer.png" alt="">
    </div>
    <div class=" col-md-4 ">
        <p class="text-muted  pull-right">Copyright © 2016 American World Maritime Inc.</p>
    </div>

</footer>

<script src="{{asset('bower_components/angular/angular.min.js')}}"></script>
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.0-rc.2/angular.min.js"></script>--}}
<script src="{{asset('bower_components/angular-route/angular-route.min.js')}}"></script>
<script src="{{asset('bower_components/angular-cookies/angular-cookies.min.js')}}"></script>

<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('js/models.js')}}"></script>
<script src="{{asset('js/controllers.js')}}"></script>
<script src="{{asset('bower_components/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
<script src="{{asset('bower_components/wow/dist/wow.min.js')}}"></script>

</body>
</html>
