<?php

namespace App\Http\Controllers\Answers;

use App\Models\Answers\Answer;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Answers\Form;
use Illuminate\Database\Query\Builder;

class FormController extends Controller
{
    public function store(Request $request)
    {
        $input = $request->validate([
            'center_id' => ['required', 'exists:centers,id'],
            'answers' => ['required', 'array'],
            'answers.*.question_id' => [
                'required',
                Rule::exists('questions', 'id')->where(function (Builder $query) {
                    $query->where('is_active', 1);
                }),
            ],
            'answers.*.content' => ['required', 'max:255'],
        ]);

        DB::transaction(function() use ($input){
            $form = Form::create([
                'center_id' => $input['center_id']
            ]);

            
            foreach($input['answers'] as $answer){
                
                Answer::create([
                    'form_id' => $form->id,
                    'question_id' => $answer['question_id'],
                    'content' => $answer['content']
                ]);
            }
        });

        return response([], 201);
    }
}
