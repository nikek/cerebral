import React from 'react'
import {connect} from 'cerebral/react'
import visibleProjectRefs from '../../computed/visibleProjectRefs'
import translations from '../../computed/translations'

import Project from '../Project'
import ProjectForm from '../ProjectForm'

export default connect(
  { filter: 'projects.$filter',
    projectRefs: visibleProjectRefs,
    selectedProject: 'projects.$draft.**',
    t: translations
  },
  { enterPressed: 'projects.filterEnterPressed',
    onChange: 'projects.filterChanged',
    onClick: 'projects.addClicked'
  },
  function Projects ({filter, projectRefs, selectedProject, t, enterPressed, onChange, onClick}) {
    const selected = selectedProject && selectedProject.ref

    const onKeyPress = e => {
      switch (e.key) {
        case 'Enter': enterPressed(); break
        default: break // noop
      }
    }

    return (
      <div>
        <div className='level'>
          <div className='level-left'>
            <div className='level-item'>
              <p className='control has-addons'>
                <input className='input'
                  placeholder={t.ProjectNameFilter}
                  value={filter || ''}
                  onChange={e => onChange({filter: e.target.value})}
                  onKeyPress={onKeyPress}
                  />
                <button className='button is-primary'
                  onClick={() => onClick()}>
                  {t.Add}
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className='columns is-multiline'>
          {projectRefs.map(ref => (
            selected === ref
            ? <ProjectForm key={ref} projectRef={ref} />
            : <Project key={ref} projectRef={ref} />
          ))}
        </div>
      </div>
    )
  }
)
