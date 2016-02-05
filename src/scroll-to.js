import $ from 'jquery';

function noop(){}

export function scrollTo( selector, { offset = 0, duration = 1000, complete = noop } = {} )
{
  let elm = $( selector ).first();

  if ( elm ) {

    if ( offset === 0 && duration === 0 ) {

      elm[0].scrollIntoView( true );
      complete();

    } else {

      $('html, body').animate(
        {
          scrollTop: ( elm.offset().top | 0 ) + ( offset | 0 )
        },
        {
          duration,
          complete
        }
      );

    }

  }
}

function handleScrollTo( e )
{
  e.preventDefault();

  const $target = $(e.currentTarget);
  const selector = $target.data('scroll-to');

  if ( selector ) {
    let offset = $target.data('scroll-offset') | 0;
    let duration = ( $target.data('scroll-duration') | 0 ) || 1000;

    scrollTo( selector, { offset, duration } );
  }
}

$( () => {
  $('[data-scroll-to]').on('click.scroll-to', handleScrollTo ).addClass('click-ready');
});
