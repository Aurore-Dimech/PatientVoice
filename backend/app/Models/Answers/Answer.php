<?php

namespace App\Models\Answers;

use App\Models\Question;
use App\Models\Answers\Form;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Answer extends Model
{
    use HasUuids;

    protected $fillable = [
        'content',
        'form_id',
        'question_id'
    ];
    protected function casts(): array
    {
        return [
            'content' => 'string',
        ];
    }

    public function form(): BelongsTo
    {
        return $this->belongsTo(Form::class);
    }

    public function question(): BelongsTo
    {
        return $this->belongsTo(Question::class);
    }
}
