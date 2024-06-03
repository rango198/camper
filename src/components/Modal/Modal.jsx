import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Modal({ show, children, onClose }) {
  return (
    <Transition.Root as={Fragment} show={show}>
      <Dialog
        as="div"
        onClose={onClose}
        style={{
          position: 'fixed',
          inset: '0',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            style={{
              position: 'fixed',
              inset: '0',
              backgroundColor: 'rgba(75, 85, 99, 0.75)',
              transition: 'opacity 0.3s ease-out',
            }}
          />
        </Transition.Child>
        <Dialog.Panel
          style={{
            position: 'relative',
            transform: 'translateY(0)',
            overflow: 'hidden',
            borderRadius: '0.75rem',
            backgroundColor: 'white',
            boxShadow:
              '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease-out',
            padding: '1.75rem',
            margin: '1.25rem auto',
            width: '100%',
            maxWidth: '982px',
            maxHeight: '720px',
          }}
        >
          <div
            style={{
              maxHeight: 'calc(95vh - 3.5rem)', // You can adjust this value
              overflowY: 'auto',
            }}
          >
            {children}
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}
