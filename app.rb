require 'sinatra'

get '/' do
	erb :index
end

get '/gallery' do
	erb :gallery
end

get '/contact' do
  erb :contact
end

get '/clients' do
	erb :clients
end