<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CoverSheet extends Model
{
    protected $fillable = [
        'date', 'time', 'toName', 'toPhone', 'toFax', 'toEmail', 're', 'ourRef',
        'motherVessel', 'arrived', 'billOfLoading',
        'containerNos', 'surveyLocation', 'dateOfSurvey', 'surveyReason','userId'
    ];
    protected $hidden = [
          'password', 'remember_token',
      ];
}
