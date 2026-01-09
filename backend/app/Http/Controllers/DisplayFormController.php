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

        $data = $themes->values()->map(function ($theme) {
            return [
                'name' => $theme->name,
                'questions' => $theme->questions->values()->map(function ($question) {
                    return [
                        'id' => (string) $question->id,
                        'name' => $question->content,
                    ];
                })->toArray(),
            ];
        })->toArray();

        return $data;
        
        return $data;
    }
}
