<?php

namespace App\Models\Answers;

use App\Models\Center;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Answer extends Model
{
    use HasUuids;

    public function center(): BelongsTo
    {
        return $this->belongsTo(Center::class);
    }
    public function contents(): HasMany
    {
        return $this->hasMany(AnswerContent::class);
    }
}
