<?php

namespace App\Models;

use App\Models\Question;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Theme extends Model
{
    protected $fillable = [
        'name',
    ];

    protected function casts(): array
    {
        return [
            'name' => 'string',
        ];
    }

    public function questions(): HasMany
    {
        return $this->hasMany(Question::class);
    }
}
