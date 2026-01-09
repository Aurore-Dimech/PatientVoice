<?php

namespace App\Http\Controllers;

use App\Models\Center;
use Illuminate\Http\Request;
use App\Http\Resources\Center\CenterResource;
use App\Http\Resources\Center\CenterListingResource;

class CenterController extends Controller
{
    public function show(Center $center)
    {
        return new CenterResource($center);
    }

    public function index()
    {
        return CenterListingResource::collection(Center::all());
    }
}
