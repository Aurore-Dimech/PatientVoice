<?php

namespace App\Models\Answers;

use App\Models\Question;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AnswerContent extends Model
{
    use HasUuids;

    protected $fillable = [
        'content',
    ];
    protected function casts(): array
    {
        return [
            'content' => 'string',
        ];
    }

    public function answer(): BelongsTo
    {
        return $this->belongsTo(Answer::class);
    }

    public function question(): BelongsTo
    {
        return $this->belongsTo(Question::class);
    }
}
