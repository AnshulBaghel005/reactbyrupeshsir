import Card from './Card'

function Tours({tours,removeTour}){ 

    return(
        <div>
          <div>
            <h1>Plan with Love</h1>
            </div>
        
        <div className='cards'>
            {
              tours.map((tour)=>{
                return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
              })
            }
        </div>
        </div>
    )
}
export default Tours