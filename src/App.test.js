import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import getReposFromGithub from './utils/api'

test('load repos form Github from a valid user', () => {
    return getReposFromGithub('juannaranjo','').then(data => {
        expect(Array.isArray(data)).toBe(true)
    })
})
