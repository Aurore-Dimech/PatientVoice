<?php

namespace App\Models;

use App\Models\Answers\Answer;
use Illuminate\Database\Eloquent\Builder;
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

    protected function scopeIsActive(Builder $query): void
    {
        $query->where('is_active', 1);
    }

    public function theme(): BelongsTo
    {
        return $this->belongsTo(Theme::class);
    }

    public function answers(): HasMany
    {
        return $this->hasMany(Answer::class);
    }
}
