import React from 'react'
import Image from 'next/image'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'

const SingleUser = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image className={styles.imgaee} src="/noavatar.png" alt="" width={50} height={50} />
                </div>
                Asilbek Tojiqulov
            </div>
            <div className={styles.fromContainer}>
                <form className={styles.form}>
                    <label>Username</label>
                    <input type="text" placeholder='username' name='username' required />
                    <input type="email" placeholder='email' name='email' required />
                    <input type="password" placeholder='password' name='password' required />
                    <input type="number" placeholder='phone' name='phone' required />

                    <select name="isAdmin" id='isAdmin'>
                        <option value="" hidden>Is Admin?</option>
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>

                    <select name="isActive" id="isActive">
                        <option value="" hidden>Is Active</option>
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>

                    <textarea name="address" id="address" cols={30} rows={10} placeholder='Enter your address !'></textarea>

                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUser