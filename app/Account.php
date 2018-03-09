<?php

namespace App;
// Model
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    /**L¬
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'github', 'location', 'published'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}

