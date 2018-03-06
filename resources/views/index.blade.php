@extends('layouts.default')

@section('title', 'Authors Form')

@section('content')
<h3>Authors Porm </h3>
<form action="/api/authors" method="post">
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" name="name">
    </div>
    <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" id="email" name="email">
    </div>
    <div class="form-group">
        <label for="github">Github</label>
        <input type="text" class="form-control" id="github" name="github">
    </div>
    <div class="form-group">
        <label for="github">Twitter</label>
        <input type="text" class="form-control" id="twitter" name="twitter">
    </div>
    <div class="form-group">
        <label for="location">Location</label>
        <input type="text" class="form-control" id="location" name="location">
    </div>
    <div class="form-group">
        <label for="latest_article_published">PublishedDate</label>
        <input type="date" class="form-control" id="latest_article_published" name="latest_article_published">
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
</form>
@endsection

@section('footer')
    <p class="text-center"><a href="https://app.swaggerhub.com/apis/Fendo181/Authors/1.0.0">API Docs(Swagger)</a></p>
@endsection