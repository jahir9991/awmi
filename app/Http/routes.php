<?php

date_default_timezone_set('Asia/Dhaka');
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('master');
});

Route::post('auth', 'UserController@checkAuth');
Route::post('checkemail', 'UserController@checkEmail');
Route::post('checkfau', 'UserController@checkFau');
Route::post('signup', 'UserController@create');
Route::post('api/insertcoversheet', 'CoverSheetController@create');
Route::get('api/getcoversheet', 'CoverSheetController@index');
Route::resource('user', 'UserController');
