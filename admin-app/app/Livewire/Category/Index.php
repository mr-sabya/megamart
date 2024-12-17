<?php

namespace App\Livewire\Category;

use App\Models\Category;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Str;
use Livewire\WithPagination;

class Index extends Component
{
    use WithFileUploads, WithPagination;

    public $title, $slug, $image, $newImage, $category_id;
    public $search = ''; // Search input
    public $filterAddedBy = ''; // Filter by 'added_by'
    public $perPage = 5; // Pagination size

    public $updateMode = false;

    protected $paginationTheme = 'bootstrap'; // Use Bootstrap pagination

    // Reset input fields
    private function resetInputFields()
    {
        $this->title = '';
        $this->slug = '';
        $this->image = '';
        $this->category_id = '';
        $this->updateMode = false;
    }

    public function render()
    {
        $categories = Category::query()
            ->when($this->search, function ($query) {
                $query->where('title', 'like', '%' . $this->search . '%');
            })
            ->when($this->filterAddedBy, function ($query) {
                $query->where('added_by', $this->filterAddedBy);
            })
            ->latest()
            ->paginate($this->perPage);

        return view('livewire.category.index', [
            'categories' => $categories,
            'users' => \App\Models\User::all(), // For filter dropdown
        ]);
    }

    public function updatedTitle()
    {
        $this->slug = Str::slug($this->title);
    }

    public function store()
    {
        $this->validate([
            'title' => 'required',
            'image' => 'nullable|image|max:1024',
        ]);

        $imagePath = $this->image ? $this->image->store('categories', 'public') : null;

        Category::create([
            'title' => $this->title,
            'slug' => Str::slug($this->title),
            'image' => $imagePath,
            'added_by' => Auth::id(),
        ]);

        session()->flash('message', 'Category Created Successfully.');
        $this->resetInputFields();
    }

    public function edit($id)
    {
        $category = Category::findOrFail($id);
        $this->category_id = $id;
        $this->title = $category->title;
        $this->slug = $category->slug;
        $this->image = $category->image;
        $this->updateMode = true;
    }

    public function update()
    {
        $this->validate([
            'title' => 'required',
            'newImage' => 'nullable|image|max:1024',
        ]);

        $category = Category::find($this->category_id);
        $imagePath = $this->newImage ? $this->newImage->store('categories', 'public') : $category->image;

        $category->update([
            'title' => $this->title,
            'slug' => Str::slug($this->title),
            'image' => $imagePath,
            'updated_by' => Auth::id(),
        ]);

        session()->flash('message', 'Category Updated Successfully.');
        $this->resetInputFields();
    }

    public function delete($id)
    {
        Category::find($id)->delete();
        session()->flash('message', 'Category Deleted Successfully.');
    }
}
