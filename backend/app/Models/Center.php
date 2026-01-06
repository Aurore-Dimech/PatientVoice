<?php

namespace App\Models;

use App\Models\Answers\Form;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Center extends Model
{
    use HasUuids, SoftDeletes;

    protected $fillable = [
        'name',
        'description',
        'longitude',
        'latitude',
    ];

    protected function casts(): array
    {
        return [
            'name' => 'string',
            'description' => 'string',
            'longitude' => 'string',
            'latitude' => 'string',
        ];
    }

    public function forms(): HasMany
    {
        return $this->hasMany(Form::class);
    }
}
