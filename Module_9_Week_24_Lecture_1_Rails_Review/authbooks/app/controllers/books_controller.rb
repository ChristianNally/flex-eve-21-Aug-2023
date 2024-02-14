class BooksController < ApplicationController
  def index
		@author = Author.find(params[:author_id])
		@books = @author.books
  end
end












# # app/controllers/authors_controller.rb
# class AuthorsController < ApplicationController
#   def index
#     @authors = Author.all
#     render json: @authors
#   end
# end
