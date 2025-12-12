<?php

namespace App\Models;

use App\Models\Answers\AnswerContent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Question extends Model
{
    protected function casts(): array
    {
        return [
            'content' => 'string',
            'is_active' => 'boolean',
        ];
    }

    public function theme(): BelongsTo
    {
        return $this->belongsTo(Theme::class);
    }

    public function answers_content(): HasMany
    {
        return $this->hasMany(AnswerContent::class);
    }
}
