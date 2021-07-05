<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        $data = [
            ['id' => 1, 'title' => 'super1'],
            ['id' => 2, 'title' => 'super2'],
            ['id' => 3, 'title' => 'super3'],
            ['id' => 4, 'title' => 'super4']
        ];

        return response()->json($data);
    }

    public function show(News $news)
    {
        return $news;
    }

    public function create(Request $request)
    {
        $news = News::create($request->all());

        return response()->json($news, 201);
    }

    public function update(Request $request, News $news)
    {
        $news->update($request->all());

        return response()->json($news, 200);
    }

    public function delete(News $news)
    {
        $news->delete();

        return response()->json(null, 204);
    }
}
