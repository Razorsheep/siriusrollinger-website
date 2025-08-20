<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogEntryRequest;
use App\Http\Requests\UpdateBlogEntryRequest;
use App\Models\BlogEntry;

class BlogEntryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogEntryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(BlogEntry $blogEntry)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BlogEntry $blogEntry)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogEntryRequest $request, BlogEntry $blogEntry)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BlogEntry $blogEntry)
    {
        //
    }
}
