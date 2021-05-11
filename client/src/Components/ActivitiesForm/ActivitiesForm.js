import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { todos, postAct } from '../../redux/actions'
import './ActivitiesFoms.css'
export const ActivitiesForm = () => {


    const countries = useSelector(state => state?.allCountries)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(todos())
    }, [dispatch])

    const [submit, setSubmit] = useState(false)

    const [activity, setActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        description: "",
        season: "",
        country: []
    })

    const handleActivity = (e) => {
        setSubmit(false)
        if (e.target.name !== "country" && e.target.name !== "difficulty") {
            setActivity({
                ...activity,
                [e.target.name]: e.target.value
            }
            )
        }
        else if (e.target.name === "difficulty") {
            setActivity({
                ...activity,
                [e.target.name]: e.target.value
            })
        }
        else {
            setActivity({
                ...activity,
                country: Array.from(e.target.selectedOptions, (option) => Number(option.value))
            }
            )

        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(true)

        dispatch(postAct(activity))
    }




    return (
        <div className="totalform">
            <div className="similNavbar">
                <div >
                    <Link className="volver" to='/home'> GO HOME </Link>
                </div>
                <div>
                    <header className="line"></header>
                </div>
                <div className="titulito">Create a new activity</div>
            </div>

            <form onSubmit={handleSubmit}>


                <div className="aMano">
                    <div className="inputName">
                        <input required autoComplete="off" className="dur" placeholder="Name" name="name" onChange={handleActivity} value={activity.name}></input>
                    </div>
                    <div className="inputDuration">
                        <input required autoComplete="off" className="dur" placeholder="Duration(in minutes)" name="duration" onChange={handleActivity} value={activity.duration}></input>
                    </div>
                    <div>
                        <textarea className="inputBig" placeholder="Describe here..." name="description" onChange={handleActivity} value={activity.description} />
                    </div>
                    <div className="selectDifficulty">
                        <select name="difficulty" onChange={handleActivity}>
                            <option>Difficulty level</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="selectSeasson">
                        <select className="season" onChange={handleActivity} name="season">
                            <option>Seasson...</option>
                            <option value="Summer">Summer</option>
                            <option value="Fall">Fall</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                    </div>
                </div>

                <div>
                    <select required className="multiSelect" onChange={handleActivity} name="country" id="countries" multiple>
                        {
                            countries?.map(country => {
                                return (
                                    <option key={country.id} value={Number(country.id)}>{country.name}</option>
                                )
                            })
                        }

                    </select>
                </div>
                <div >
                    <input className="butonAct" type="submit" />
                </div>
                {
                    submit ? <div className="confirmacion">The activity was created successfully</div> : null
                }


            </form>
        </div>
    )
}
