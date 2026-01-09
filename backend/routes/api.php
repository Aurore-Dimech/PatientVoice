<?php

use App\Http\Controllers\Answers\FormController;
use App\Http\Controllers\CenterController;
use App\Http\Controllers\DisplayFormController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(CenterController::class)->group(function () {
    Route::get('/centers', 'index');
    Route::get('/centers/{center}', 'show');
});

Route::post('/forms',[ FormController::class, 'store']);

Route::get('/forms', DisplayFormController::class);
