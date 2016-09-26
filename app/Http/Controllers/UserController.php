<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    public function checkAuth(Request $request)
    {

        $cradentials = [
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ];


        if (!Auth::attempt($cradentials)) {
            return response('Wrong Email or Password', 401);

        } else if (Auth::user()->role == 3) {

            return response('please wait for admin confirmation', 423);
        }

        return response(Auth::user(), 202);

    }

    public function index()
    {

    }

    public function create(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'password' => 'required|min:4',
            'email' => 'required|unique:users',


        ]);
        if ($validator->fails()) {

            return response($validator->errors()->all(), 403);
        }


        try {
            return response(User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => \Hash::make($request->input('password'))
            ]));
        } catch (\Exception $e) {
            return response('error data', 403);
        }

    }

    public function store(Request $request)
    {

    }

    public function show($id)
    {

    }

    public function edit($id)
    {

    }

    public function update(Request $request, $id)
    {

    }

    public function destroy($id)
    {

    }

    public function checkEmail(Request $request)
    {

        try {
            $user = User::where('email', '=', $request->input('email'))->first()['email'];
            if ($user) {
                return 0;
            } else {
                return 1;
            }

        } catch (\Exception $e) {
            return response('error', 403);
        }
    }

    public function checkFau(Request $request)
    {

        try {
            $user = ['name' => 'janina'];

            return response()->json($user);
        } catch (\Exception $e) {
            return response('error', 403);
        }
    }
}
