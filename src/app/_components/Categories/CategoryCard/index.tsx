"use client"

import React from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import { Category } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'
type CategoryCardProps = {
  category :Category
}

const CategoryCard = ({category} : CategoryCardProps) => {
  const media = category.media as Media
  const {setCategoryFilters} = useFilter()
  return (
    <Link
    href='/products'
    className={classes.card}
    onClick = {() => setCategoryFilters([category.id])}
    style={{backgroundImage: `url(${media.url})`}}>
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard