<?php

namespace App\Enum;

enum RoleEnum : string
{
    case ADMIN = 'ADMIN';
    case USER = 'USER';

    public function getLabel(): string
    {
        return match($this) {
            self::ADMIN => 'admin',
            self::USER => 'user',
        };
    }
}
