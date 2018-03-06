@extends('layouts.default')

@section('title', 'Authors Form')

@section('content')

<h3>Authors Form </h3>
<form class="/submit" method="post">
    <div class="form-groupe">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="name">
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email" name="email" placeholder="email">
    </div>
    <div class="form-group">
        <label for="github">Github</label>
        <input type="text" class="form-control" id="github" name="github" placeholder="github">
    </div>
    <div class="form-group">
        <label for="github">Twitter</label>
        <input type="text" class="form-control" id="twitter" name="twitter" placeholder="twitter">
    </div>
    <div class="form-group">
        <label for="location">Location</label>
        <input type="text" class="form-control" id="location" name="location" placeholder="location">
    </div>
    <div class="form-group">
        <label for="latest_article_published">Published</label>
        <input type="text" class="form-control" id="latest_article_published" name="latest_article_published" placeholder="published">
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
</form>
@endsection