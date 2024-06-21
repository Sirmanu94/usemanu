import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RatingStars from '../components/RatingStars'
import { Fade } from 'react-awesome-reveal'

function CreateReview() {
  const navigate = useNavigate()
  const [review, setReview] = useState('')
  const [error, setError] = useState('')

  function handleReviewChange(event) {
    setReview(event.target.value)
  }

  function thanksForTheReview() {
    if (review.trim() === '') {
      setError('La recensione non può essere vuota.')
      return
    }

    alert('Grazie per la tua recensione! Sarai rendirizzat* alla home tra pochi secondi...')
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  return (
    <Fade>
    <div>
      <div className="h-fit py-6 flex flex-col justify-center sm:py-12 mt-8 ">
        <div className="py-3 sm:max-w-xl sm:mx-auto">
          <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg max-[768px]:shadow-none max-[768px]:px-2 max-[768px]:py-2">
            <div className="px-12 py-5">
              <h2 className="text-black text-3xl font-semibold max-[768px]:text2xl">La tua opinione per noi è importante !</h2>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-lg text-black max-[768px]:text-sm">Come è stata la tua esperienza con useManu ?</span>
            
              </div>
              <div className="w-3/4 flex flex-col">
                <textarea
                  rows="3"
                  className="p-4 text-gray-500 rounded-xl resize-none shadow-lg"
                  value={review}
                  onChange={handleReviewChange}
                  placeholder="Lasciaci una recensione, se ti va !"
                />
                {error && <p className="text-red-500 mt-2">{error}</p>}
              
              </div>  <button onClick={thanksForTheReview} className="border mt-2 border-black bg-green-300 rounded-full font-bold px-8 py-2 hover:text-blue-800 hover:border-yellow-300 transition-colors duration-300">
                 INVIA 
              </button> 
            </div>
            <div className="h-20 flex items-center justify-center">
              <a href="/" className="text-gray-600">Forse più tardi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fade>
  )
}

export default CreateReview
