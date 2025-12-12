<?php

namespace App\Models\Answers;

use App\Models\Center;
use App\Models\Answers\Answer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Form extends Model
{
    use HasUuids;

    public function center(): BelongsTo
    {
        return $this->belongsTo(Center::class);
    }
    public function answers(): HasMany
    {
        return $this->hasMany(Answer::class);
    }
}
