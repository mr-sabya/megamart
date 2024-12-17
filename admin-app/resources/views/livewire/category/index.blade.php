<div class="row">
    <div class="col-lg-4">

        <div class="card">
            <div class="card-header">
                <h3>Add Category</h3>
            </div>

            <div class="card-body">
                <form wire:submit.prevent="{{ $updateMode ? 'update' : 'store' }}">
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" wire:model="title" class="form-control" id="title" placeholder="Enter Title">
                        @error('title') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>

                    <div class="mb-3">
                        <label for="slug" class="form-label">Slug</label>
                        <input type="text" wire:model="slug" class="form-control" id="slug" readonly>
                    </div>

                    <div class="mb-3">
                        <label for="image" class="form-label">Image</label>
                        <div class="image">
                            @if($image && !$updateMode)
                            <img src="{{ $image->temporaryUrl() }}">
                            @elseif($updateMode && $image)
                            <img src="{{ asset('storage/'.$image) }}">
                            @endif
                        </div>

                        <input type="file" wire:model="{{ $updateMode ? 'newImage' : 'image' }}" class="form-control" id="image">

                    </div>

                    <button type="submit" class="btn btn-primary">{{ $updateMode ? 'Update' : 'Save' }}</button>
                    @if($updateMode)
                    <button type="button" class="btn btn-secondary" wire:click="resetInputFields">Cancel</button>
                    @endif
                </form>
            </div>
        </div>

    </div>

    <div class="col-lg-8">

        <div class="card">
            <div class="card-header">
                <h3>Category Management</h3>
            </div>

            <div class="card-body">
                <!-- Search, Filter, and Per Page Dropdown -->
                <div class="row mb-3">
                    <div class="col-md-4">
                        <input type="text" wire:model.debounce.300ms="search" class="form-control" placeholder="Search by Title">
                    </div>
                    <div class="col-md-4">
                        <select wire:model="filterAddedBy" class="form-select">
                            <option value="">Filter by Added By</option>
                            @foreach($users as $user)
                            <option value="{{ $user->id }}">{{ $user->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-md-4">
                        <select wire:model="perPage" class="form-select">
                            <option value="5">5 per page</option>
                            <option value="10">10 per page</option>
                            <option value="15">15 per page</option>
                        </select>
                    </div>
                </div>

                <!-- Table -->
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Slug</th>
                            <th>Image</th>
                            <th>Added By</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($categories as $category)
                        <tr>
                            <td>{{ $loop->index + 1 }}</td>
                            <td>{{ $category->title }}</td>
                            <td>{{ $category->slug }}</td>
                            <td>
                                @if ($category->image)
                                <img src="{{ asset('storage/' . $category->image) }}" width="50" alt="Image">
                                @endif
                            </td>
                            <td>{{ $category->addedBy->name ?? 'N/A' }}</td>
                            <td>
                                <button class="btn btn-warning btn-sm" wire:click="edit({{ $category->id }})">Edit</button>
                                <button class="btn btn-danger btn-sm" wire:click="delete({{ $category->id }})">Delete</button>
                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="6" class="text-center">No Categories Found</td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>

                <!-- Pagination Links -->
                <div class="d-flex justify-content-center mt-3">
                    {{ $categories->links() }}
                </div>
            </div>
        </div>


    </div>
</div>