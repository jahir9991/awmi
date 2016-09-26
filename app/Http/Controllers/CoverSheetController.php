<?php

namespace App\Http\Controllers;

use App\CoverSheet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

//use App\Http\Requests;

class CoverSheetController extends Controller
{

    public function index()
    {
        return CoverSheet::all();
    }

    public function create(Request $request)
    {
//        return response()->json($request);
        try {
            return response(CoverSheet::create([
                'date' => $request->input('date'),
                'time' => $request->input('time'),
                'toName' => $request->input('toName'),
                'toPhone' => $request->input('toPhone'),
                'toFax' => $request->input('toFax'),
                'toEmail' => $request->input('toEmail'),
                're' => $request->input('re'),
                'ourRef' => $request->input('ourRef'),
                'motherVessel' => $request->input('motherVessel'),
                'arrived' => $request->input('arrived'),
                'billOfLoading' => $request->input('billOfLoading'),
                'containerNos' => $request->input('containerNos'),
                'surveyLocation' => $request->input('surveyLocation'),
                'dateOfSurvey' => $request->input('dateOfSurvey'),
                'surveyReason' => $request->input('surveyReason'),
                'userId' => Auth::user()->id
            ]));
        } catch (\Exception $e) {

            return response($e, 403);
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


}
