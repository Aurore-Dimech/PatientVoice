<?php

namespace App\Http\Controllers;

use App\Models\Theme;
use Illuminate\Http\Request;
use App\Http\Resources\OrganizedQuestionsResource;

class DisplayFormController extends Controller
{
    public function __invoke()
    {
        $themes = Theme::with(['questions' => function ($query){
            $query->isActive();
        }])->get();

        $data = $themes->mapWithKeys(function ($theme) {
            return [
                $theme->name => $theme->questions->pluck('content', 'id')->toArray()
            ];
        });
        
        return $data;
    }
}
